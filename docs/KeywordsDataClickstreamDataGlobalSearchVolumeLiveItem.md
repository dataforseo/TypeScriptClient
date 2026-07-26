# KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | keyword. keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character) |[optional]|
**search_volume** | **number** | clickstream-based average monthly search volume rate. represents the (approximate) number of searches for the given keyword idea based on clickstream. you can learn more about clickstream search volume in this Help Center article |[optional]|
**country_distribution** | **CountryDistribution[]** | distribution of clickstream by countries. represents clickstream-based search volume in available countries, as well as its respective percentage of global search volume |[optional]|