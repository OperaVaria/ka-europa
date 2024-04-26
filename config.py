""" Flask extensions configuration file. """

# Minify settings:
bypass = ["robots_txt", "humans_txt", "sitemap_xml"]

# Talisman settings:
csp = {
    "default-src": ["'none'"],
    "connect-src": ["'self'"],
    "script-src": [
        "'self'",
    ],
    "style-src": ["'self'"],
    "img-src": ["'self'"],
    "object-src": ["'none'"],
    "base-uri": ["'none'"],
    "form-action": ["'self'"],
}

# Display message when accidentally run:
if __name__ == "__main__":
    print("This is a config file for Flask. Not meant to be run!")
