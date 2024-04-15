**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordIntentInfo

# Class: KeywordIntentInfo

## Implements

- [`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordIntentInfo(data)

> **new KeywordIntentInfo**(`data`?): [`KeywordIntentInfo`](KeywordIntentInfo.md)

#### Parameters

• **data?**: [`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md)

#### Returns

[`KeywordIntentInfo`](KeywordIntentInfo.md)

#### Source

main.ts:85199

## Properties

### label?

> **`optional`** **label**: `string`

search intent name
possible values: informational, navigational, commercial, transactional

#### Implementation of

[`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md).[`label`](../interfaces/IKeywordIntentInfo.md#label)

#### Source

main.ts:85192

***

### probability?

> **`optional`** **probability**: `number`

search intent probability
1 indicates the highest probability

#### Implementation of

[`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md).[`probability`](../interfaces/IKeywordIntentInfo.md#probability)

#### Source

main.ts:85195

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:85208

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:85226

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordIntentInfo`](KeywordIntentInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordIntentInfo`](KeywordIntentInfo.md)

#### Source

main.ts:85219
