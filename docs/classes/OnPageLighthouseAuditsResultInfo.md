[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageLighthouseAuditsResultInfo

# Class: OnPageLighthouseAuditsResultInfo

Defined in: main.ts:175388

## Implements

- [`IOnPageLighthouseAuditsResultInfo`](../interfaces/IOnPageLighthouseAuditsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseAuditsResultInfo()

> **new OnPageLighthouseAuditsResultInfo**(`data`?): [`OnPageLighthouseAuditsResultInfo`](OnPageLighthouseAuditsResultInfo.md)

Defined in: main.ts:175396

#### Parameters

##### data?

[`IOnPageLighthouseAuditsResultInfo`](../interfaces/IOnPageLighthouseAuditsResultInfo.md)

#### Returns

[`OnPageLighthouseAuditsResultInfo`](OnPageLighthouseAuditsResultInfo.md)

## Properties

### audits?

> `optional` **audits**: `string`[]

Defined in: main.ts:175392

the list of available lighthouse audits
an array containing the titles of available audits
Note: the titles can change depending on if the audit passed or failed and may contain markdown code

#### Implementation of

[`IOnPageLighthouseAuditsResultInfo`](../interfaces/IOnPageLighthouseAuditsResultInfo.md).[`audits`](../interfaces/IOnPageLighthouseAuditsResultInfo.md#audits)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:175405

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:175426

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageLighthouseAuditsResultInfo`](OnPageLighthouseAuditsResultInfo.md)

Defined in: main.ts:175419

#### Parameters

##### data

`any`

#### Returns

[`OnPageLighthouseAuditsResultInfo`](OnPageLighthouseAuditsResultInfo.md)
