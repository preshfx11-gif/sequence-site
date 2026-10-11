HOW TO RUN
1) Local:   open a terminal in this folder and run   python3 serve.py
             then open  http://localhost:8000
   (Double-clicking index.html will NOT work: browsers block ES modules on file://)
2) Online:  drag this whole folder to https://app.netlify.com/drop  (or any static host).
   Host it at the ROOT of a domain (not inside a sub-folder).

NEEDS INTERNET: images, videos, icons and some fonts load from Framer's servers.

WHAT WORKS: the home page.
WHAT DOES NOT: Works / About / Gallery / Contact / Insights / Legal / Products pages
(their page files were not in the upload) and any font weights not in ./fonts (fall back to Google Fonts).
NOT TESTED in a real browser by the person who built this package.
