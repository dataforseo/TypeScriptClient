# MapsSearch

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**rank_group** | **number** | *position within a group of elements with identical `type` values*. positions of elements with different `type` values are omitted from the `rank_group` |[optional]|
**rank_absolute** | **number** | *absolute rank among all the elements* |[optional]|
**domain** | **string** | *domain of the business entity* |[optional]|
**title** | **string** | *directory title*. can take the following values: `At this place`, `Directory` |[optional]|
**url** | **string** | *URL to view the menu* |[optional]|
**rating** | **RatingInfo** | *the element's rating*. the popularity rate based on reviews and displayed in SERP |[optional]|
**rating_distribution** | **{ [key: string]: number; }** | the distribution of ratings of the business entity. the object displays the number of 1-star to 5-star ratings, as reviewed by users |[optional]|
**snippet** | **string** | *additional information about the business entity* |[optional]|
**address** | **string** | *address of the business entity* |[optional]|
**address_info** | **AddressInfo** | *object containing address components of the business entity* |[optional]|
**place_id** | **string** | *unique place identifier*. [place id](https://developers.google.com/places/place-id) of the local establishment featured in the element. learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) |[optional]|
**phone** | **string** | *phone number of the business entity* |[optional]|
**main_image** | **string** | *URL of the main image featured in Google My Business profile* |[optional]|
**total_photos** | **string** | *total count of images featured in Google My Business profile* |[optional]|
**category** | **string** | *business category*. Google My Business general category that best describes the services provided by the business entity |[optional]|
**additional_categories** | **string[]** | *additional business categories*. additional Google My Business categories that describe the services provided by the business entity in more detail |[optional]|
**price_level** | **string** | *property price level*. can take values: `inexpensive`, `moderate`, `expensive`, `very_expensive`. if there is no price level information, the value will be `null` |[optional]|
**hotel_rating** | **string** | *hotel class rating*. class ratings range between 1-5 stars, [learn more](https://support.google.com/business/answer/7660515?hl=en). if there is no hotel class rating information, the value will be `null` |[optional]|
**category_ids** | **string[]** | *global category IDs*. universal category IDs that do not change based on the selected country |[optional]|
**work_hours** | **BusinessWorkHoursInfo** | *open hours*. information about work hours of the local establishment |[optional]|
**feature_id** | **string** | *the unique identifier of the element in SERP*. learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) |[optional]|
**cid** | **string** | *google-defined client id*. unique id of a local establishment;. can be used with [Google Reviews API](/v3/reviews/google/overview/?php) to get a full list of reviews. learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) |[optional]|
**latitude** | **number** | *latitude coordinate of the local establishments in google maps*. example:. `'latitude': 51.584091` |[optional]|
**longitude** | **number** | *longitude coordinate of the local establishment in google maps*. example:. `'longitude': -0.31365919999999997` |[optional]|
**is_claimed** | **boolean** | *shows whether the entity is verified by its owner on Google Maps* |[optional]|
**local_justifications** | **string[]** | *Google local justifications*. snippets of text that “justify” why the business is showing up for search query |[optional]|
**is_directory_item** | **boolean** | *business establishment is a part of the directory*. indicates whether the business establishment is a part of the directory;. if `true`, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre);. **note:** if the business establishment is a parent item in the directory, the value will be `null` |[optional]|