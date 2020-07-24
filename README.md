# nextjs-wordpress

## headless-wordpress-with-react-and-nextjs-part-one

- https://webdevstudios.com/2019/01/03/headless-wordpress-with-react-and-nextjs-1/
- More simply, your data lives in one place; your website lives in another.

## building-the-nextjs-9-4-wordpress-example

https://webdevstudios.com/2020/06/02/building-the-nextjs-9-4-wordpress-example/

- wp local (http)

```url
http://localhost:3000/posts/programmer-unit-formation
```

- wp engine (https)

```url
http://localhost:3000/posts/programmer-unit-formation
```

---

## run localhost in an https environment

- open PowerShell in the VScode terminal
- PS C:\Users\Anthr\ckt> (\$env:HTTPS = "true") -and (npm run start)
- this will launch the app concurrently to an https environment with a not secure warning "Your connection is not private"
  - open dev tools
  - click on "view certificate"
  - click on the details tab
    - select "Copy to File..."
      - click "next"
      - select "DER encoded binary X.509 (.CER)
      - click "next"
      - store the file anywhere (desktop for ease of access)
  - navigate to the .CER file stored locally and open it
    - click "Install Certificate..."
    - select "Local Machine" for Store Location
    - click "next"
      - select "Place all certificates in the following store" then click "Browse..."
      - select "Trusted Root Certification Authorities" then click "OK"
      - click "Finish"
  - run (\$env:HTTPS = "true") -and (npm run start) in PowerShell terminal once more
  - voila, a secure https dev environment
  - note: it usually takes several moments for the certificate to update

---
