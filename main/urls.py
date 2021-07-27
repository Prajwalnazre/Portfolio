from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('', views.mainpage, name='Main Page'),
    path('visitor/', views.post_visitor, name='visitor'),
    path('visitors_get/', views.get_visitor, name='get_visitors')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)