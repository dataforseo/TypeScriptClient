[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

# Interface: IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

domain found for the specified category

#### Defined in

main.ts:89548

***

### main\_domain?

> `optional` **main\_domain**: `string`

primary domain

#### Defined in

main.ts:89550

***

### metrics\_difference?

> `optional` **metrics\_difference**: `object`

metrics difference between first_date and second_date
calculated by subtracting domain metrics as of the greater date from domain metrics as of the smaller date

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

#### Defined in

main.ts:89555

***

### metrics\_history?

> `optional` **metrics\_history**: `object`

historical ranking and traffic data of the domain

#### Index Signature

 \[`key`: `string`\]: `object`

#### Defined in

main.ts:89552

***

### organic\_count?

> `optional` **organic\_count**: `number`

current total count of organic SERPs that contain the domain

#### Defined in

main.ts:89540

***

### organic\_etv?

> `optional` **organic\_etv**: `number`

current organic ETV of the domain

#### Defined in

main.ts:89538

***

### organic\_is\_lost?

> `optional` **organic\_is\_lost**: `number`

current number of lost ranked elements
indicates how many ranked elements of the domain were previously presented in SERPs, but weren’t found during the last check

#### Defined in

main.ts:89543

***

### organic\_is\_new?

> `optional` **organic\_is\_new**: `number`

current number of new ranked elements
indicates how many new ranked elements were found for the domain

#### Defined in

main.ts:89546

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:89534

***

### top\_categories?

> `optional` **top\_categories**: `number`[]

categories for which domains are collected

#### Defined in

main.ts:89536
