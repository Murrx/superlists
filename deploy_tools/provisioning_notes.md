Provisioning a new site
=======================

## Required packages:

 * nginx
 * Python 3
 * Git
 * pip
 * virtualenv

## Nginx Virtual Host config

 * see nginx.template.conf
 * replace SITENAME with, eg, live.murrx.me

## Upstart Job

 * see gunicorn-upstart.template.conf
 * replace SITENAME with, eg, live.murrx.me

## Folder structure:
Assume we have a user account at /home/username

/home/username
|__ sites
    |__SITENAME
       |-- database
       |-- source
       |-- static
       |-- virtualenv
