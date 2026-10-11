# Run:  python3 serve.py   then open http://localhost:8000
import http.server, socketserver
class H(http.server.SimpleHTTPRequestHandler):
    extensions_map = {**http.server.SimpleHTTPRequestHandler.extensions_map,
                      '.mjs': 'text/javascript', '.js': 'text/javascript', '.woff2': 'font/woff2'}
with socketserver.TCPServer(("", 8000), H) as s:
    print("Open http://localhost:8000  (Ctrl+C to stop)")
    s.serve_forever()
