

# #import requests
# #from bs4 import BeautifulSoup
# #import re
import pandas as pd
from selenium.webdriver.chrome.service import Service
from selenium import webdriver

# service = Service(
#     executable_path="C:/Users/vigneshbharathi.k/Downloads/chromedriver_win32/chromedriver")
driver = webdriver.Chrome()


url = "https://bni-chennaicbda.in/chennai-cbd-(a)-royals/en-IN/memberlist?chapterName=25224&regionIds=12707$isChapterwebsite"

# driver = webdriver.Chrome()
cont = driver.get(url)
# Get all tr elements inside table element

trs = driver.find_elements(
    "xpath", "//table[@class='table table-hover listtables dataTable no-footer dtr-inline']/tbody/tr")
data = []

for element in trs:
    print(element.text)
    data.append((element.text))

print("Data -----------------------------------\n", data)
df = pd.DataFrame(data, columns=['a'])

df.to_excel(r'./bni.xlsx', index=True)


#soup = BeautifulSoup(cont.page_source,'lxml')
#z = 'href=memberdetails?encryptedMemberId'
# res = soup.findAll("a",class_:"linkone")
# print(res.text)
# driver.quit()


# def main():
#    url = f"https://bni-india.in/en-IN/memberlist?countryIds=3857&regionId=32172&chapterName=&chapterArea=&memberKeywords=&chapterCity=&memberFirstName=&memberLastName=&memberCompany=&ul=en-gb&de=UTF-8&dt=Member%20List&sd=24-bit&sr=1536x864&vp=1215x379&je=0&_u=QACAAUABAAAAACAAI~&jid=1196282108&gjid=35089122&cid=1878763580.1667025200&tid=UA-72777146-1&_gid=741217751.1667366717&_r=1&gtm=2ouav0&z=1019004374"
#   while True:
#        print(url)
#       if True:
#          url = "https://bni-india.in/en-IN/memberlist?countryIds=3857&regionId=32172&chapterName=&chapterArea=&memberKeywords=&chapterCity=&memberFirstName=&memberLastName=&memberCompany=&ul=en-gb&de=UTF-8&dt=Member%20List&sd=24-bit&sr=1536x864&vp=1215x379&je=0&_u=QACAAUABAAAAACAAI~&jid=1196282108&gjid=35089122&cid=1878763580.1667025200&tid=UA-72777146-1&_gid=741217751.1667366717&_r=1&gtm=2ouav0&z=1019004374"
#     else:
#        break


# def

# Request URL: https://bni-india.in/bnicms/v3/frontend/rss/getrssvalues


# https://bni-india.in/en-IN/memberdetails?encryptedMemberId=Ie4mMsaijcaLBPnU2aUFBA%3D%3D&name=Arun+Kumar   ( ENCRYPTED MEMBER ID var)
# /https://bni-india.in/en-IN/memberdetails?encryptedMemberId=E8Ij2qGsQMRgnJGbjukvGQ%3D%3D&name=Aslam+Mohamed

# https://bni-india.in/en-IN/memberlist?countryIds=3857&regionId=32172&chapterName=&chapterArea=&memberKeywords=&chapterCity=&memberFirstName=&memberLastName=&memberCompany=
