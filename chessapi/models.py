from django.db import models


class YourModelName(models.Model):
    data_field = models.JSONField()  # Assuming you're storing JSON data
    
    # Other fields if needed
    # Add more fields as necessary to represent the data you want to store

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.id} - {self.created_at}'


# Create your models here.
