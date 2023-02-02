HestiaCP is a fork of VestaCP, a bold and smart open smart initiative to offer a lightweight replacement to webserver commercial admin panels

 My humble contribution to this project is a tiny online app aimed to generate the necessary scriptline for an unatended HestiaCP installation



Tips for Using Hestia With Cloudflare
Cloudflare doesn’t allow port 8083, so you can change Hestia to use 2083 instead in your terminal:

sudo su -

v-change-sys-port 2083
Make sure you have all the ports allowed in the Oracle ingress rules:

2083,80,443,143,993,110,995,25,465,587

It’s good to use Cloudflare origin SSL for maximum performance, you also get 15 year certificates and don’t need to worry about updating certificates for while 🙂

To do this, you can add the Cloudflare certificate authority to your server like this:

sudo su -

wget https://developers.cloudflare.com/ssl/static/origin_ca_rsa_root.pem

mv origin_ca_rsa_root.pem origin_ca_rsa_root.crt

cp origin_ca_rsa_root.crt /usr/local/share/ca-certificates

update-ca-certificates
Cloudflare Email Tips:
For the A records for mail and webmail DNS, change them to DNS only:
![image](https://user-images.githubusercontent.com/4044180/216274625-5e17d1a1-1ee1-4e02-9ba0-fdeb4c7fd8f4.png)

Then use ‘lets encrypt’ for SSL on your mail domain rather than Cloudflare:

![image](https://user-images.githubusercontent.com/4044180/216274559-34ceed15-56d8-4b48-bd4a-7cf6d2d69eda.png)

 You may access it here  https://benzntech.github.io/hestiacp-scriptline-generator/

 Feel free to use it, improve it or integrate it
 
 
Credits: https://ideaspot.com.au/blog/cloudflare-hestia-setup/
