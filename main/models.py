from django.db import models

# Create your models here.

class visitors(models.Model) :
    name = models.CharField(max_length=250)
    created = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(max_length=250)
    message = models.TextField(max_length=650)

    def __str__(self):
        return self.name
