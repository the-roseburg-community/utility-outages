import pytest
from app import map_dec_xy_to_latlon

def test_point1():
    lat, lon = map_dec_xy_to_latlon(80642, 80827)
    assert pytest.approx(lat, rel=1e-6) == 43.48518340719974
    assert pytest.approx(lon, rel=1e-6) == -123.48087790358299
