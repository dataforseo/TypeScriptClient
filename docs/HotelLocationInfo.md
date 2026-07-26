# HotelLocationInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**neighborhood** | **string** | *name of the neighborhood where the hotel is located* |[optional]|
**neighborhood_description** | **string** | *description of the neighborhood where the hotel is located* |[optional]|
**maps_url** | **string** | *url to the location of the hotel in google maps* |[optional]|
**overall_score** | **number** | *overall score of the hotel location*. indicates the overall score of the hotel's location in the range from 1 to 5;. calculated based on data from the hotel's proximity to nearby things to do and restaurants, transportation, and airports;. note that the criteria are not weighted equally in the overall score |[optional]|
**score_by_categories** | **{ [key: string]: number; }** | *category scores of the hotel location*. the scores of the hotel's location tied to the categories that indicate the proximity to nearby things to do, restaurants, transportation, and airports; |[optional]|
**latitude** | **number** | *hotel latitude*. latitude coordinates of the hotel's location. example:. `39.4806397` |[optional]|
**longitude** | **number** | *hotel longitude*. latitude coordinates of the hotel's location. example:. `-106.0512973` |[optional]|
**location_chain** | **LocationChain[]** | *elements of the location chain*. additional parameters of each element of the location chain |[optional]|