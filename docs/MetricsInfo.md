# MetricsInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**pos_1** | **number** | *number of organic SERPs where the domain ranks #1* |[optional]|
**pos_2_3** | **number** | *number of organic SERPs where the domain ranks #2-3* |[optional]|
**pos_4_10** | **number** | *number of organic SERPs where the domain ranks #4-10* |[optional]|
**pos_11_20** | **number** | *number of organic SERPs where the domain ranks #11-20* |[optional]|
**pos_21_30** | **number** | *number of organic SERPs where the domain ranks #21-30* |[optional]|
**pos_31_40** | **number** | *number of organic SERPs where the domain ranks #31-40* |[optional]|
**pos_41_50** | **number** | *number of organic SERPs where the domain ranks #41-50* |[optional]|
**pos_51_60** | **number** | *number of organic SERPs where the domain ranks #51-60* |[optional]|
**pos_61_70** | **number** | *number of organic SERPs where the domain ranks #61-70* |[optional]|
**pos_71_80** | **number** | *number of organic SERPs where the domain ranks #71-80* |[optional]|
**pos_81_90** | **number** | *number of organic SERPs where the domain ranks #81-90* |[optional]|
**pos_91_100** | **number** | *number of organic SERPs where the domain ranks #91-100* |[optional]|
**etv** | **number** | *estimated traffic volume*. estimated organic monthly traffic to the domain. calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for. learn more about how the metric is calculated in [this help center article](https://dataforseo.com/help-center/how-is-etv-calculated) |[optional]|
**count** | **number** | *total count of organic SERPs that contain the domain* |[optional]|
**estimated_paid_traffic_cost** | **number** | *estimated cost of converting organic search traffic into paid*. represents the estimated monthly cost of running ads (USD) for all keywords a domain ranks for. the metric is calculated as the product of organic `etv` and paid `cpc` values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search. learn more about how the metric is calculated in [this help center article](https://dataforseo.com/help-center/how-is-traffic-cost-calculated) |[optional]|
**is_new** | **number** | number of new ranked elements. indicates how many new ranked elements were found for this domain |[optional]|
**is_up** | **number** | rank went up. indicates how many ranked elements of this domain went up in Google Search |[optional]|
**is_down** | **number** | rank went down. indicates how many ranked elements of this domain went down in Google Search |[optional]|
**is_lost** | **number** | lost ranked elements. indicates how many ranked elements of this domain were previously presented in SERPs, but weren’t found during the last check |[optional]|