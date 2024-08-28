[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SearchIntentInfo

# Class: SearchIntentInfo

## Implements

- [`ISearchIntentInfo`](../interfaces/ISearchIntentInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SearchIntentInfo()

> **new SearchIntentInfo**(`data`?): [`SearchIntentInfo`](SearchIntentInfo.md)

#### Parameters

• **data?**: [`ISearchIntentInfo`](../interfaces/ISearchIntentInfo.md)

#### Returns

[`SearchIntentInfo`](SearchIntentInfo.md)

#### Defined in

main.ts:84733

## Properties

### foreign\_intent?

> `optional` **foreign\_intent**: `string`[]

supplementary search intents
possible values: informational, navigational, commercial, transactional

#### Implementation of

[`ISearchIntentInfo`](../interfaces/ISearchIntentInfo.md).[`foreign_intent`](../interfaces/ISearchIntentInfo.md#foreign_intent)

#### Defined in

main.ts:84724

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

date and time when the dataset was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISearchIntentInfo`](../interfaces/ISearchIntentInfo.md).[`last_updated_time`](../interfaces/ISearchIntentInfo.md#last_updated_time)

#### Defined in

main.ts:84729

***

### main\_intent?

> `optional` **main\_intent**: `string`

main search intent
possible values: informational, navigational, commercial, transactional

#### Implementation of

[`ISearchIntentInfo`](../interfaces/ISearchIntentInfo.md).[`main_intent`](../interfaces/ISearchIntentInfo.md#main_intent)

#### Defined in

main.ts:84721

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type
possible values: google

#### Implementation of

[`ISearchIntentInfo`](../interfaces/ISearchIntentInfo.md).[`se_type`](../interfaces/ISearchIntentInfo.md#se_type)

#### Defined in

main.ts:84718

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:84742

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:84766

***

### fromJS()

> `static` **fromJS**(`data`): [`SearchIntentInfo`](SearchIntentInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SearchIntentInfo`](SearchIntentInfo.md)

#### Defined in

main.ts:84759
