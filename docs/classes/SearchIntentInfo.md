[**Documentation**](../README.md)

***

[Documentation](../README.md) / SearchIntentInfo

# Class: SearchIntentInfo

Defined in: main.ts:93246

## Implements

- [`ISearchIntentInfo`](../interfaces/ISearchIntentInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SearchIntentInfo()

> **new SearchIntentInfo**(`data`?): [`SearchIntentInfo`](SearchIntentInfo.md)

Defined in: main.ts:93264

#### Parameters

##### data?

[`ISearchIntentInfo`](../interfaces/ISearchIntentInfo.md)

#### Returns

[`SearchIntentInfo`](SearchIntentInfo.md)

## Properties

### foreign\_intent?

> `optional` **foreign\_intent**: `string`[]

Defined in: main.ts:93255

supplementary search intents
possible values: informational, navigational, commercial, transactional

#### Implementation of

[`ISearchIntentInfo`](../interfaces/ISearchIntentInfo.md).[`foreign_intent`](../interfaces/ISearchIntentInfo.md#foreign_intent)

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:93260

date and time when the dataset was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISearchIntentInfo`](../interfaces/ISearchIntentInfo.md).[`last_updated_time`](../interfaces/ISearchIntentInfo.md#last_updated_time)

***

### main\_intent?

> `optional` **main\_intent**: `string`

Defined in: main.ts:93252

main search intent
possible values: informational, navigational, commercial, transactional

#### Implementation of

[`ISearchIntentInfo`](../interfaces/ISearchIntentInfo.md).[`main_intent`](../interfaces/ISearchIntentInfo.md#main_intent)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:93249

search engine type
possible values: google

#### Implementation of

[`ISearchIntentInfo`](../interfaces/ISearchIntentInfo.md).[`se_type`](../interfaces/ISearchIntentInfo.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:93273

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:93297

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SearchIntentInfo`](SearchIntentInfo.md)

Defined in: main.ts:93290

#### Parameters

##### data

`any`

#### Returns

[`SearchIntentInfo`](SearchIntentInfo.md)
