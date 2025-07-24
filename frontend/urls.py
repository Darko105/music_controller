from django.urls import path
from .views import index

urls = ['','index/', 'join-room/', 'create-room/']
urlpatterns = []

for url in urls:
    urlpatterns.append(path(url, index, name=url.replace('/', '')))

