[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / KeywordIntentInfo

# Class: KeywordIntentInfo

## Implements

- [`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordIntentInfo()

> **new KeywordIntentInfo**(`data`?): [`KeywordIntentInfo`](KeywordIntentInfo.md)

#### Parameters

• **data?**: [`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md)

#### Returns

[`KeywordIntentInfo`](KeywordIntentInfo.md)

#### Defined in

main.ts:88087

## Properties

### label?

> `optional` **label**: `string`

search intent name
possible values: informational, navigational, commercial, transactional

#### Implementation of

[`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md).[`label`](../interfaces/IKeywordIntentInfo.md#label)

#### Defined in

main.ts:88080

***

### probability?

> `optional` **probability**: `number`

search intent probability
1 indicates the highest probability

#### Implementation of

[`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md).[`probability`](../interfaces/IKeywordIntentInfo.md#probability)

#### Defined in

main.ts:88083

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:88096

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:88114

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordIntentInfo`](KeywordIntentInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordIntentInfo`](KeywordIntentInfo.md)

#### Defined in

main.ts:88107
