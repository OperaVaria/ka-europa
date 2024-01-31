# Flask imports:
from flask import Flask, render_template


# Declare Flask app:
app = Flask(__name__)


# Page building decorators:
@app.route("/")
def index():
    """Set up index page."""
    return render_template("index.html")

@app.route("/about")
def about():
    """Set up about page."""
    return render_template("about.html")

@app.route("/episodes")
def episodes():
    """Set up episodes page."""
    return render_template("episodes.html")

@app.route("/writings")
def writings():
    """Set up writings page."""
    return render_template("writings.html")

@app.route("/contact")
def contact():
    """Set up contact page."""
    return render_template("contact.html")


# When run as main run on localhost, port 8080:
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080)
