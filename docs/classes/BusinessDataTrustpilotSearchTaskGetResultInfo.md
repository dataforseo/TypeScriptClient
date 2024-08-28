[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BusinessDataTrustpilotSearchTaskGetResultInfo

# Class: BusinessDataTrustpilotSearchTaskGetResultInfo

## Implements

- [`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotSearchTaskGetResultInfo()

> **new BusinessDataTrustpilotSearchTaskGetResultInfo**(`data`?): [`BusinessDataTrustpilotSearchTaskGetResultInfo`](BusinessDataTrustpilotSearchTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md)

#### Returns

[`BusinessDataTrustpilotSearchTaskGetResultInfo`](BusinessDataTrustpilotSearchTaskGetResultInfo.md)

#### Defined in

main.ts:215698

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#check_url)

#### Defined in

main.ts:215683

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#datetime)

#### Defined in

main.ts:215688

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#items)

#### Defined in

main.ts:215694

***

### items\_count?

> `optional` **items\_count**: `number`

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#items_count)

#### Defined in

main.ts:215691

***

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#keyword)

#### Defined in

main.ts:215678

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResultInfo.md#se_domain)

#### Defined in

main.ts:215680

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:215707

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:215733

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTrustpilotSearchTaskGetResultInfo`](BusinessDataTrustpilotSearchTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTrustpilotSearchTaskGetResultInfo`](BusinessDataTrustpilotSearchTaskGetResultInfo.md)

#### Defined in

main.ts:215726
