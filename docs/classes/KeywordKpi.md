**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordKpi

# Class: KeywordKpi

## Implements

- [`IKeywordKpi`](../interfaces/IKeywordKpi.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordKpi(data)

> **new KeywordKpi**(`data`?): [`KeywordKpi`](KeywordKpi.md)

#### Parameters

• **data?**: [`IKeywordKpi`](../interfaces/IKeywordKpi.md)

#### Returns

[`KeywordKpi`](KeywordKpi.md)

#### Source

main.ts:132785

## Properties

### desktop?

> **`optional`** **desktop**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

keyword data aggregated for desktop devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`desktop`](../interfaces/IKeywordKpi.md#desktop)

#### Source

main.ts:132775

***

### mobile?

> **`optional`** **mobile**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

keyword data aggregated for mobile devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`mobile`](../interfaces/IKeywordKpi.md#mobile)

#### Source

main.ts:132778

***

### tablet?

> **`optional`** **tablet**: [`KeywordKpiInfo`](KeywordKpiInfo.md)[]

keyword data aggregated for tablet devices
if there is no data, then the value is null

#### Implementation of

[`IKeywordKpi`](../interfaces/IKeywordKpi.md).[`tablet`](../interfaces/IKeywordKpi.md#tablet)

#### Source

main.ts:132781

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:132794

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:132825

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordKpi`](KeywordKpi.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordKpi`](KeywordKpi.md)

#### Source

main.ts:132818
