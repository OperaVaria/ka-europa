"""
kaeu_flask_app.py

Main file of the "Ká-Európa Podcast website" project.

Website for the "Ká-Európa" podcast, built as a Flask web app.
"""

# Metadata variables:
__author__ = "Csaba Latosinszky"
__contact__ = "lcs_it@proton.me"
__version__ = "1.0.0"
__date__ = "2024.04.27"

# Licence:
__license__ = "GPLv3"
__copyright__ = "Copyright © 2024, Ká-Európa Podcast"

"""
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public
License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later
version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not,
see <https://www.gnu.org/licenses/>
"""

# Built-in imports:
from datetime import datetime

# Flask imports:
from flask import Flask, abort, render_template, send_from_directory

# Import Flask extensions:
from flask_minify import Minify
from flask_talisman import Talisman

# Local imports:
from db.db_func import get_episode_list

# Import setting variables:
from config import csp  # Content security policy settings.
from config import bypass  # Minify bypass settings.

# Create Flask app:
app = Flask(__name__)

# Set up Talisman. Force HTTPS should normally be on, but Cloudflare handles it.
tali = Talisman(app, content_security_policy=csp, force_https=False)

# Set up Minify.
mini = Minify(app=app, bypass=bypass, html=True, js=True, cssless=True)

# Current year variable for footer.
current_year = datetime.now().year


# Page building decorators:


@app.route("/")
def index():
    """Set up index page."""
    return render_template("index.html", current_year=current_year)


@app.route("/about")
def about():
    """Set up about page."""
    return render_template("about.html", current_year=current_year)


@app.route("/episodes")
def episodes():
    """Set up episodes page."""
    return render_template("episodes.html", current_year=current_year)


@app.route("/writings")
def writings():
    """Set up writings page."""
    return render_template("writings.html", current_year=current_year)


@app.route("/contact")
def contact():
    """Set up contact page."""
    return render_template("contact.html", current_year=current_year)


@app.route("/episodes/s<int:snum>")
def season(snum):
    """Set up a season page."""
    # If season number does not exist yet, throw 404.
    if not 1 <= snum < 5:
        abort(404)
    # Fetch episode list for season.
    episode_list = get_episode_list(snum)
    return render_template(
        "season.html", season_number=snum, current_year=current_year, episode_list=episode_list
    )


@app.route("/episodes/mono")
def season_mono():
    """Set up mono episodes page."""
    # Fetch episode list for season.
    episode_list = get_episode_list(0)
    return render_template(
        "mono.html", current_year=current_year, episode_list=episode_list
    )


@app.route("/robots.txt")
def robots_txt():
    """Set up robots.txt."""
    return send_from_directory("static", "other/robots.txt")


@app.route("/humans.txt")
def humans_txt():
    """Set up humans.txt."""
    return send_from_directory("static", "other/humans.txt")


@app.route("/sitemap.xml")
def sitemap_xml():
    """Set up sitemap.xml."""
    return send_from_directory("static", "other/sitemap.xml")


# When run as main run on localhost, port 8080:
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
