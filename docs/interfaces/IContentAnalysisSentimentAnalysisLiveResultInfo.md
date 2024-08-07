**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IContentAnalysisSentimentAnalysisLiveResultInfo

# Interface: IContentAnalysisSentimentAnalysisLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### positive\_connotation\_distribution?

> **`optional`** **positive\_connotation\_distribution**: [`PositiveConnotationDistribution`](../classes/PositiveConnotationDistribution.md)

citation distribution by sentiment connotation types
contains objects with citation counts and relevant data distributed by types of sentiments (sentiment polarity);
possible sentiment connotation types: positive, negative, neutral

#### Source

main.ts:169937

***

### sentiment\_connotation\_distribution?

> **`optional`** **sentiment\_connotation\_distribution**: [`SentimentConnotationDistribution`](../classes/SentimentConnotationDistribution.md)

citation distribution by sentiment connotations
contains objects with citation counts and relevant data distributed by sentiments (emotional reactions);
possible sentiment connotation types: anger, happiness, love, sadness, share, fun

#### Source

main.ts:169941

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:169933
