""" Flask extensions configuration file. """

# Minify settings:
bypass = ["robots_txt", "humans_txt", "sitemap_xml"]

# Talisman settings:
csp = {
    "default-src": ["'none'"],
    "connect-src": ["'self'"],
    "script-src": ["'self'"],
    "style-src": [
        "'self'",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/",
    ],
    "img-src": ["'self'"],
    "frame-src": ["https://open.spotify.com/"],
    "font-src": ["https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/"],
    "object-src": ["'none'"],
    "base-uri": ["'none'"],
    "form-action": ["'self'"],
}

# Display message when accidentally run:
if __name__ == "__main__":
    print("This is a config file for Flask. Not meant to be run!")
