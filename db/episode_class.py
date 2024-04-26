"""
episode_class.py

Episode dataclass.

Part of the "Ká-Európa Podcast website" project by OperaVaria.
"""

# Import dataclass function:
from dataclasses import dataclass


@dataclass(frozen=True)
class Episode:
    """Class to store episode information in a standardized way."""

    season: int
    episode: int
    title: str
    descr: str
    link: str


# Print on accidental run:
if __name__ == "__main__":
    print("Importable module. Not meant to be run!")
