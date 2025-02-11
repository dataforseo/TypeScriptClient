[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotSearchTaskGetResultInfo

# Class: BusinessDataTrustpilotSearchTaskGetResultInfo

Defined in: main.ts:226520

## Implements

- [`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotSearchTaskGetResultInfo()

> **new BusinessDataTrustpilotSearchTaskGetResultInfo**(`data`?): [`BusinessDataTrustpilotSearchTaskGetResultInfo`](BusinessDataTrustpilotSearchTaskGetResultInfo.md)

Defined in: main.ts:226542

#### Parameters

##### data?

[`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md)

#### Returns

[`BusinessDataTrustpilotSearchTaskGetResultInfo`](BusinessDataTrustpilotSearchTaskGetResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:226527

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:226532

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

Defined in: main.ts:226538

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:226535

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:226522

keyword in a POST array

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#keyword)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:226524

search engine domain in a POST array

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#se_domain)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:226551

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:226577

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTrustpilotSearchTaskGetResultInfo`](BusinessDataTrustpilotSearchTaskGetResultInfo.md)

Defined in: main.ts:226570

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTrustpilotSearchTaskGetResultInfo`](BusinessDataTrustpilotSearchTaskGetResultInfo.md)
