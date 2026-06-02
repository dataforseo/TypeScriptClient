# HotelReviewInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**value** | **number** | overall hotel rating based on customer votes |[optional]|
**votes_count** | **number** | number of customer votes<br>the number of customer votes included in the calculation of the hotel rating |[optional]|
**mentions** | **ReviewMentionInfo[]** | hotel mentions<br>information about hotel reviews by criteria |[optional]|
**rating_distribution** | **{ [key: string]: number; }** | rating distribution by votes<br>the distribution of votes across the rating in the range from 1 to 5 |[optional]|
**other_sites_reviews** | **OtherSitesReviewsInfo[]** | reviews on third-party sites<br>reviews from third-party sites |[optional]|