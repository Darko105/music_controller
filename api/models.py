from django.db import models
import string
import random

def generate_unique_code():
    length = 8
    while True:
        code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=length))
        if not Room.objects.filter(code=code).exists():
            return code



# Create your models here.
class Room(models.Model):
    code = models.CharField(max_length=8,default=generate_unique_code, unique=True)
    host = models.CharField(max_length=50, default="",unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Room {self.code} hosted by {self.host}"