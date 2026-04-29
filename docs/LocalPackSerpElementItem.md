# LocalPackSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | group rank in SERP<br>position within a group of elements with identical type values;<br>positions of elements with different type values are omitted from rank_group;<br>always equals 0 for desktop |[optional]|
**rank_absolute** | **number** | absolute rank in SERP<br>absolute position among all the elements in SERP<br>always equals 0 for desktop |[optional]|
**title** | **string** | reference page title |[optional]|
**description** | **string** | link description |[optional]|
**domain** | **string** | domain name of the reference |[optional]|
**phone** | **string** | phone number |[optional]|
**booking_url** | **string** | URL of the booking page |[optional]|
**url** | **string** | URL |[optional]|
**is_paid** | **boolean** | indicates whether the element is an ad |[optional]|
**rating** | **RatingInfo** | the element’s rating<br>the popularity rate based on reviews and displayed in SERP;<br>if there is none, equals null |[optional]|
**cid** | **string** | google-defined client id |[optional]|