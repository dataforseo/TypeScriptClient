**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SpellInfo

# Class: SpellInfo

## Implements

- [`ISpellInfo`](../interfaces/ISpellInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SpellInfo(data)

> **new SpellInfo**(`data`?): [`SpellInfo`](SpellInfo.md)

#### Parameters

• **data?**: [`ISpellInfo`](../interfaces/ISpellInfo.md)

#### Returns

[`SpellInfo`](SpellInfo.md)

#### Source

main.ts:22592

## Properties

### keyword?

> **`optional`** **keyword**: `string`

keyword obtained as a result of search engine autocorrection
the results will be provided for the corrected keyword

#### Implementation of

[`ISpellInfo`](../interfaces/ISpellInfo.md).[`keyword`](../interfaces/ISpellInfo.md#keyword)

#### Source

main.ts:22582

***

### type?

> **`optional`** **type**: `string`

type of autocorrection
possible values:
did_you_mean, showing_results_for, no_results_found_for, including_results_for
note: Yahoo and Yandex support only the following autocorrection type:
including_results_for

#### Implementation of

[`ISpellInfo`](../interfaces/ISpellInfo.md).[`type`](../interfaces/ISpellInfo.md#type)

#### Source

main.ts:22588

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:22601

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:22619

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SpellInfo`](SpellInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SpellInfo`](SpellInfo.md)

#### Source

main.ts:22612
