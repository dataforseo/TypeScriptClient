# AppStoreInfoOrganic

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**rank_group** | **number** | position within a group of elements with identical type values. positions of elements with different type values are omitted from rank_group |[optional]|
**rank_absolute** | **number** | absolute rank among all the listed apps. absolute position among all apps on the list |[optional]|
**position** | **string** | the alignment of the element in SERP. can take the following values: left |[optional]|
**app_id** | **string** | ID of the app |[optional]|
**title** | **string** | title of the app |[optional]|
**subtitle** | **string** | subtitle of the app |[optional]|
**url** | **string** | URL to the app page on App Store |[optional]|
**icon** | **string** | URL to the app icon |[optional]|
**description** | **string** | description of the app |[optional]|
**reviews_count** | **number** | the total number of reviews of the app |[optional]|
**rating** | **RatingInfo** | average rating of the app |[optional]|
**price** | **PriceInfo** | price of the app |[optional]|
**is_free** | **boolean** | indicates whether the app is free |[optional]|
**main_category** | **string** | main category/genre of the app |[optional]|
**categories** | **string[]** | all relevant categories/genres of the app. Note: this field returns only one relevant category in the array |[optional]|
**languages** | **string[]** | languages supported in the app. Note: this field returns only one supported language in the array |[optional]|
**advisories** | **string[]** | age rating and age-based content advisories |[optional]|
**developer** | **string** | name of the app developer |[optional]|
**developer_id** | **string** | ID of the app developer |[optional]|
**developer_url** | **string** | URL to the developer page on App Store |[optional]|
**version** | **string** | current version of the app |[optional]|
**minimum_os_version** | **string** | minimum OS version required to install the app |[optional]|
**size** | **string** | size of the app |[optional]|
**released_date** | **string** | date and time when the app was released. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;. example:. 2019-11-15 12:57:46 +00:00. Note: this field is deprecated and always returns null |[optional]|
**last_update_date** | **string** | date and time when the app was last updated. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;. example:. 2019-11-15 12:57:46 +00:00 |[optional]|
**update_notes** | **string** | update notes. contains the latest update notes from the developer |[optional]|
**images** | **string[]** | app images. contains URLs to the images used on the app page on App Store |[optional]|
**similar_apps** | **AppsInfo[]** | similar apps. displays apps similar to the app in a POST request |[optional]|
**more_apps_by_developer** | **AppsInfo[]** | similar apps. information about apps built by the same developer |[optional]|