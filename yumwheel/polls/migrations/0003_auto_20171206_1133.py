# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-12-06 11:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0002_auto_20171206_0933'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='city',
            field=models.CharField(default='City', max_length=50),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='description',
            field=models.CharField(default='Describe Yourself', max_length=200),
        ),
    ]
