const options = [
    { name: " (--apache)", id: "apache", param: "--apache", desc: " Install Apache [yes|no] default: yes", selected: true },
    { name: " (--nginx)", id: "nginx", param: "--nginx", desc: "Install Nginx [yes|no] default: yes", selected: true },
    { name: " (--phpfpm)", id: "phpfpm", param: "--phpfpm", desc: "Install PHP-FPM [yes|no] default: yes", selected: true },
    { name: " (--multiphp)", id: "multiphp", param: "--multiphp", desc: " Install Multi-PHP [yes|no] default: no", selected: false },
    { name: " (--vsftpd)", id: "vsftpd", param: "--vsftpd", desc: "Install Vsftpd [yes|no] default: yes", selected: true },
    { name: " (--proftpd)", id: "proftpd", param: "--proftpd", desc: "Install ProFTPD [yes|no] default: no", selected: false },
    { name: " (--named)", id: "named", param: "--named", desc: "Install Bind [yes|no] default: yes", selected: true },
    { name: " (--mysql)", id: "mysql", param: "--mysql", desc: "Install MariaDB [yes|no] default: yes", selected: true },
    { name: " (--postgresql)", id: "--postgresql", param: "--postgresql", desc: "Install PostgreSQL [yes|no] default: no", selected: false },
    { name: " (--exim)", id: "--exim", param: "--exim", desc: "Install Exim [yes|no] default: yes", selected: true },
    { name: " (--dovecot)", id: "dovecot", param: "--dovecot", desc: "Install Dovecot [yes|no] default: yes", selected: true },
    { name: " (--clamav)", id: "clamav", param: "--clamav", desc: "Install ClamAV [yes|no] default: yes", selected: true },
    { name: " (--spamassassin)", id: "spamassassin", param: "--spamassassin", desc: "Install SpamAssassin [yes|no] default: yes", selected: true },
    { name: " (--iptables)", id: "iptables", param: "--iptables", desc: "Install Iptables [yes|no] default: yes", selected: true },
    { name: " (--fail2ban)", id: "fail2ban", param: "--fail2ban", desc: "Install Fail2ban [yes|no] default: yes", selected: true },
    { name: " (--quota)", id: "quota", param: "--quota", desc: "Filesystem Quota [yes|no] default: no", selected: false },
    { name: " (--api)", id: "api", param: "--api", desc: "Activate API [yes|no] default: yes", selected: true },
    { name: " (--force)", id: "force", param: "--force", desc: "Force installation [yes|no] default: no", selected: false },
    { name: " (--interactive)", id: "interactive", param: "--interactive", desc: "Interactive install [yes|no] default: yes", selected: true },
    { name: " (--port)", id: "port", param: "--port", desc: "Change Backend Port default: 8083", selected: true, text: '8083', textField: true },
    { name: " (--hostname)", id: "hostname", param: "--hostname", desc: "Set hostname [text]", selected: false, text: '', textField: true },
    { name: " (--email)", id: "email", param: "--email", desc: "Set admin email [text]", selected: false, text: '', textField: true },
    { name: " (--password)", id: "password", param: "--password", desc: "Set admin password [text]", selected: false, text: '', textField: true },
    { name: " (--lang)", id: "language", param: "--lang", desc: "Default language default: en ( ISO 639-1 codes)", selected: true, text: 'en', textField: true },
    { name: "--with-debs", id: "debs", param: "--with-debs", desc: "Path to Hestia debs", selected: false, text: '', textField: true },
]

