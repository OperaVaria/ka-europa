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

@app.route("/episodes/s1")
def season_1():
    """Set up season 1 page."""
    return render_template("season1.html")

@app.route("/episodes/s2")
def season_2():
    """Set up season 2 page."""
    return render_template("season2.html")

@app.route("/episodes/s3")
def season_3():
    """Set up season 3 page."""
    return render_template("season3.html")

@app.route("/episodes/s4")
def season_4():
    """Set up season 4 page."""
    return render_template("season4.html")

@app.route("/episodes/s5")
def season_5():
    """Set up season 5 page."""
    return render_template("season5.html")

@app.route("/episodes/mono")
def season_mono():
    """Set up mono episodes page."""
    return render_template("mono.html")


# When run as main run on localhost, port 8080:
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080)
