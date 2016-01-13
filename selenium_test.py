
from bs4 import BeautifulSoup
import urllib, time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium import webdriver

wd = webdriver.Firefox()
#wd = webdriver.Chrome()
wd.get('http://www.vconnect.com/qsearch?sq=haulage-company&sl=Lagos')
#wd.get('http://www.vconnect.com/SearchListWEB/GetSearchWEBDataJSON?count=0&pageNum=0&type=0&rowsPerPage=1900&SearchText=haulage-company&SearchLocation=lagos&typeid=0&locid=0&requestType=0&totalpages=3042&spellcheck=True&locationmore=&typemore=&sugkeyword=&cursormark=[\w\-]+)?') 
#AoMIPjDC5lYEJjgxMjE4NQ%3D%3D')


current = 0

while current<1900:
	wd.execute_script("window.scrollTo(0, document.body.scrollHeight);")
	current = len(WebDriverWait(wd, 20).until(EC.presence_of_all_elements_located((By.CLASS_NAME, "items-details"))))
	print current
	
#WebDriverWait(wd, 10).until(
 # EC.visibility_of_element_located((By.CLASS_NAME, "items-details")))


html_page = wd.page_source
#wd.quit()

soup = BeautifulSoup(html_page)
letters = soup.findAll("div", class_="items-details")
prefix = "www.vconnect.com"
#url = prefix + letters[9].a["href"]
#wd.get(url)

for element in letters:
    print prefix + element.a["href"]

