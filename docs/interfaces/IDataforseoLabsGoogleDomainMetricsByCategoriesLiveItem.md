**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

# Interface: IDataforseoLabsGoogleDomainMetricsByCategoriesLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> **`optional`** **domain**: `string`

domain found for the specified category

#### Source

main.ts:88870

***

### main\_domain?

> **`optional`** **main\_domain**: `string`

primary domain

#### Source

main.ts:88872

***

### metrics\_difference?

> **`optional`** **metrics\_difference**: `Object`

metrics difference between first_date and second_date
calculated by subtracting domain metrics as of the greater date from domain metrics as of the smaller date

#### Index signature

 \[`key`: `string`\]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Source

main.ts:88877

***

### metrics\_history?

> **`optional`** **metrics\_history**: `Object`

historical ranking and traffic data of the domain

#### Index signature

 \[`key`: `string`\]: `Object`

#### Source

main.ts:88874

***

### organic\_count?

> **`optional`** **organic\_count**: `number`

current total count of organic SERPs that contain the domain

#### Source

main.ts:88862

***

### organic\_etv?

> **`optional`** **organic\_etv**: `number`

current organic ETV of the domain

#### Source

main.ts:88860

***

### organic\_is\_lost?

> **`optional`** **organic\_is\_lost**: `number`

current number of lost ranked elements
indicates how many ranked elements of the domain were previously presented in SERPs, but weren’t found during the last check

#### Source

main.ts:88865

***

### organic\_is\_new?

> **`optional`** **organic\_is\_new**: `number`

current number of new ranked elements
indicates how many new ranked elements were found for the domain

#### Source

main.ts:88868

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:88856

***

### top\_categories?

> **`optional`** **top\_categories**: `number`[]

categories for which domains are collected

#### Source

main.ts:88858
