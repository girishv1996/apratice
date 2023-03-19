import base64
import json
import urllib.request
import xmltodict
import pandas as pd

username = ""
password = ""
num_ips = int(input("Please enter the number of IPs: "))

for i in range(num_ips):
    ip = input(f"Please enter IP {i+1}: ")
    uri = f"https://qualysguard.qg1.apps.qualys.in/api/2.0/fo/asset/host/vm/detection/?action=list&severities=3,4&ips={ip}"

    base64AuthInfo = base64.b64encode(f"{username}:{password}".encode()).decode()

    headers = {
        "Authorization": f"Basic {base64AuthInfo}",
        "X-Requested-With": "curl"
    }

    request = urllib.request.Request(uri, headers=headers)
    response = urllib.request.urlopen(request)

    xml_response = response.read().decode()
    json_data = json.dumps(xmltodict.parse(xml_response))

    data = json.loads(json_data)

    detections = []
    try:
        for detection in data['HOST_LIST_VM_DETECTION_OUTPUT']['RESPONSE']['HOST_LIST']['HOST']['DETECTION_LIST']['DETECTION']:
            id = detection['QID']
            severity = detection['SEVERITY']
            ip = data['HOST_LIST_VM_DETECTION_OUTPUT']['RESPONSE']['HOST_LIST']['HOST']['IP']
            d = detection['RESULTS']

            detections.append({"Detection ID": id, "Severity": severity, "IP": ip, "Details": d})
    except KeyError:
        print(f"No results found for IP: {ip}")
        continue

    df = pd.DataFrame(detections)
    filename = f"{ip}.xlsx"
    df.to_excel(filename, index=False)
    print(f"Output written to {filename}")
