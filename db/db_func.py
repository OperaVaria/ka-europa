"""
db_func.py

Functions related to database operations.

Part of the "Ká-Európa Podcast website" project by OperaVaria.
"""

# Imports:
import sqlite3
from episode_class import Episode


def get_episode_list(season):
    """Create a list of Episode instances for a season."""
    # Declare episode list
    episode_list = []
    # Database access.
    con = sqlite3.connect("db/episodes.db")
    cur = con.cursor()
    # Search parameter.
    param = (season,)
    # Execute.
    for row in cur.execute("SELECT * FROM episode_list WHERE season = ?", param):
        instance = Episode(*row)
        episode_list.append(instance)
    # Close connection.
    con.close()
    return episode_list


# Print on accidental run:
if __name__ == "__main__":
    print("Importable module. Not meant to be run!")
