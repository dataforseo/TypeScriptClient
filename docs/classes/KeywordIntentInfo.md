[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordIntentInfo

# Class: KeywordIntentInfo

Defined in: main.ts:96568

## Implements

- [`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordIntentInfo()

> **new KeywordIntentInfo**(`data`?): [`KeywordIntentInfo`](KeywordIntentInfo.md)

Defined in: main.ts:96578

#### Parameters

##### data?

[`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md)

#### Returns

[`KeywordIntentInfo`](KeywordIntentInfo.md)

## Properties

### label?

> `optional` **label**: `string`

Defined in: main.ts:96571

search intent name
possible values: informational, navigational, commercial, transactional

#### Implementation of

[`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md).[`label`](../interfaces/IKeywordIntentInfo.md#label)

***

### probability?

> `optional` **probability**: `number`

Defined in: main.ts:96574

search intent probability
1 indicates the highest probability

#### Implementation of

[`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md).[`probability`](../interfaces/IKeywordIntentInfo.md#probability)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:96587

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:96605

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordIntentInfo`](KeywordIntentInfo.md)

Defined in: main.ts:96598

#### Parameters

##### data

`any`

#### Returns

[`KeywordIntentInfo`](KeywordIntentInfo.md)
