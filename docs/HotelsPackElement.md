# HotelsPackElement

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**price** | **PriceInfo** | price indicated in the element |[optional]|
**title** | **string** | title of a given link element |[optional]|
**description** | **string** | link description |[optional]|
**hotel_identifier** | **string** | unique hotel identifier<br>unique hotel identifier assigned by Google;<br>example: 'CgoIjaeSlI6CnNpVEAE' |[optional]|
**domain** | **string** | domain where a link points |[optional]|
**url** | **string** | source URL |[optional]|
**is_paid** | **boolean** | indicates whether the element is an ad |[optional]|
**rating** | **RatingInfo** | the item’s rating <br>the popularity rate based on reviews and displayed in SERP;<br>if there is none, equals null |[optional]|