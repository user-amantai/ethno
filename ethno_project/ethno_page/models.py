from django.db import models

# Create your models here.
class socialMedia(models.Model):
    facebook = models.CharField(max_length=255)
    instagram = models.CharField(max_length=255)

class dishMenu(models.Model):
    nameOfDishes = models.CharField(max_length=255)
    priceOfDishes = models.IntegerField()
    photoOfDishes = models.ImageField()

class services(models.Model):
    nameService = models.CharField(max_length=255)
    descriptionService = models.CharField(max_length=255)
    priceService = models.IntegerField()

class halls(models.Model):
    nameHall = models.CharField(max_length=255)
    descriptionHall = models.CharField(max_length=255)
    priceHall = models.IntegerField()

class about(models.Model):
    aboutUs = models.CharField(max_length=255)

class contacts(models.Model):
    contacts = models.CharField(max_length=255)
    address = models.CharField(max_length=255)