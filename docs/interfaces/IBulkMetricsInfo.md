[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBulkMetricsInfo

# Interface: IBulkMetricsInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

#### Defined in

main.ts:110809

***

### count?

> `optional` **count**: `number`

total count of organic SERPs that contain the domain

#### Defined in

main.ts:110804

***

### etv?

> `optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:110802
