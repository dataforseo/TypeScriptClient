# DataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | search engine type |[optional]|
**top_categories** | **number[]** | categories for which domains are collected |[optional]|
**organic_etv** | **number** | current organic ETV of the domain |[optional]|
**organic_count** | **number** | current total count of organic SERPs that contain the domain |[optional]|
**organic_is_lost** | **number** | current number of lost ranked elements. indicates how many ranked elements of the domain were previously presented in SERPs, but weren’t found during the last check |[optional]|
**organic_is_new** | **number** | current number of new ranked elements. indicates how many new ranked elements were found for the domain |[optional]|
**domain** | **string** | domain found for the specified category |[optional]|
**main_domain** | **string** | primary domain |[optional]|
**metrics_history** | **{ [key: string]: { [key: string]: DataforseoLabsMetricsInfo; }; }** | historical ranking and traffic data of the domain |[optional]|
**metrics_difference** | **{ [key: string]: DataforseoLabsMetricsInfo; }** | metrics difference between first_date and second_date. calculated by subtracting domain metrics as of the greater date from domain metrics as of the smaller date |[optional]|