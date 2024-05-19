**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsCompetitorsDomainLiveItem

# Class: DataforseoLabsCompetitorsDomainLiveItem

## Implements

- [`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsCompetitorsDomainLiveItem(data)

> **new DataforseoLabsCompetitorsDomainLiveItem**(`data`?): [`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md)

#### Returns

[`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)

#### Source

main.ts:91992

## Properties

### avg\_position?

> **`optional`** **avg\_position**: `number`

average position of the domain in SERP
Note: average position is calculated for intersected keywords only;
the value for a given domain may differ when combined with different target websites

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`avg_position`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#avg_position)

#### Source

main.ts:91971

***

### competitor\_metrics?

> **`optional`** **competitor\_metrics**: `Object`

metrics for intersecting keywords
ranking and traffic data relevant to the keywords that the provided domain shares with the target domain
note: in this array ranking and traffic data is provided for the returned competitor’s domain

#### Index signature

 \[`key`: `string`\]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`competitor_metrics`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#competitor_metrics)

#### Source

main.ts:91988

***

### domain?

> **`optional`** **domain**: `string`

domain name

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`domain`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#domain)

#### Source

main.ts:91967

***

### full\_domain\_metrics?

> **`optional`** **full\_domain\_metrics**: `Object`

metrics for all keywords of the domain
full overview of ranking and traffic data relevant to all keywords that the provided domain is ranking for

#### Index signature

 \[`key`: `string`\]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`full_domain_metrics`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#full_domain_metrics)

#### Source

main.ts:91980

***

### intersections?

> **`optional`** **intersections**: `number`

number of intersecting keywords

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`intersections`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#intersections)

#### Source

main.ts:91977

***

### metrics?

> **`optional`** **metrics**: `Object`

metrics for intersecting keywords
ranking and traffic data relevant to the keywords that the provided domain shares with the target domain
note: in this array ranking and traffic data is provided for the target considering the keywords target shares in search with the competitor’s domain

#### Index signature

 \[`key`: `string`\]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#metrics)

#### Source

main.ts:91984

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#se_type)

#### Source

main.ts:91965

***

### sum\_position?

> **`optional`** **sum\_position**: `number`

sum of all domain positions in SERP
Note: average position is calculated for intersected keywords only;
the value for a given domain may differ when combined with different target websites

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`sum_position`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#sum_position)

#### Source

main.ts:91975

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:92001

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:92043

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)

#### Source

main.ts:92036
