# BusinessDataBusinessListingsSearchLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**title** | **string** | *title of the element in SERP*. the name of the business entity for which the results are collected |[optional]|
**original_title** | **string** | *original title of the element*. original title not translated by Google |[optional]|
**description** | **string** | *description of the element in SERP*. the description of the business entity for which the results are collected |[optional]|
**category** | **string** | *business category*. Google My Business general category that best describes the services provided by the business entity |[optional]|
**category_ids** | **string[]** | *global category IDs*. universal category IDs that do not change based on the selected country |[optional]|
**additional_categories** | **string[]** | *additional business categories*. additional Google My Business categories that describe the services provided by the business entity in more detail |[optional]|
**cid** | **string** | *google-defined client id*. unique id of a local establishment. learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) |[optional]|
**feature_id** | **string** | *the unique identifier of the element in SERP*. learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) |[optional]|
**address** | **string** | *address of the business entity* |[optional]|
**address_info** | **AddressInfo** | *object containing address components of the business entity* |[optional]|
**place_id** | **string** | *unique place identifier*. [place id](https://developers.google.com/places/place-id) of the local establishment featured in the element. learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) |[optional]|
**phone** | **string** | *phone number of the business entity* |[optional]|
**url** | **string** | *absolute url of the business entity* |[optional]|
**domain** | **string** | *domain of the business entity* |[optional]|
**logo** | **string** | *URL of the logo featured in Google My Business profile* |[optional]|
**main_image** | **string** | *URL of the main image featured in Google My Business profile* |[optional]|
**total_photos** | **number** | *total count of images featured in Google My Business profile* |[optional]|
**snippet** | **string** | *additional information on the business entity* |[optional]|
**latitude** | **number** | *latitude coordinate of the local establishments in google maps*. example:. `'latitude': 51.584091` |[optional]|
**longitude** | **number** | *longitude coordinate of the local establishment in google maps*. example:. `'longitude': -0.31365919999999997` |[optional]|
**is_claimed** | **boolean** | *shows whether the entity is verified by its owner on Google Maps* |[optional]|
**attributes** | **BusinessDataAttributesInfo** | *service details in a form of user-reviewed checks;*. service details of a business entity displayed in a form of checks and based on user feedback and business `category` |[optional]|
**place_topics** | **{ [key: string]: number; }** | *keywords mentioned in customer reviews*. contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword. example: `'place_topics': {'egg roll': 48,'birthday': 33}` |[optional]|
**rating** | **RatingInfo** | *the element's rating*. the popularity rate based on reviews and displayed in SERP |[optional]|
**hotel_rating** | **number** | *hotel class rating*. class ratings range between 1-5 stars, [learn more](https://support.google.com/business/answer/7660515?hl=en). if there is no hotel class rating information, the value will be `null` |[optional]|
**price_level** | **string** | *property price level*. can take values: `inexpensive`, `moderate`, `expensive`, `very_expensive`. if there is no price level information, the value will be `null` |[optional]|
**rating_distribution** | **{ [key: string]: number; }** | *the distribution of ratings of the business entity*. the object displays the number of 1-star to 5-star ratings, as reviewed by users |[optional]|
**people_also_search** | **PeopleAlsoSearch[]** | *related business entities* |[optional]|
**work_time** | **BusinessWorkHoursInfo** | *work time details*. information related to operational hours of the business entity |[optional]|
**popular_times** | **PopularTimes** | *popular times*. information related to busy hours of the business entity |[optional]|
**local_business_links** | **BaseLocalBusinessLink[]** | *available interactions with the business*. list of options to interact with the business directly from search results |[optional]|
**contact_info** | **BusinessDataContactInfo[]** | *available contacts of the business*. list of contacts to interact with the business |[optional]|
**check_url** | **string** | *direct URL to search engine results*. you can use it to make sure that we provided accurate results |[optional]|
**last_updated_time** | **string** | *date and time when the data was last updated*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2023-01-26 09:03:15 +00:00` |[optional]|
**first_seen** | **string** | *date and time when our crawler found the business listing element for the first time*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2023-03-11 10:04:11 +00:00` |[optional]|
**services** | **BusinessDataServiceInfo[]** |  |[optional]|