[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentAnalysisSentimentAnalysisLiveResultInfo

# Interface: IContentAnalysisSentimentAnalysisLiveResultInfo

Defined in: main.ts:179745

## Indexable

\[`key`: `string`\]: `any`

## Properties

### positive\_connotation\_distribution?

> `optional` **positive\_connotation\_distribution**: [`PositiveConnotationDistribution`](../classes/PositiveConnotationDistribution.md)

Defined in: main.ts:179751

citation distribution by sentiment connotation types
contains objects with citation counts and relevant data distributed by types of sentiments (sentiment polarity);
possible sentiment connotation types: positive, negative, neutral

***

### sentiment\_connotation\_distribution?

> `optional` **sentiment\_connotation\_distribution**: [`SentimentConnotationDistribution`](../classes/SentimentConnotationDistribution.md)

Defined in: main.ts:179755

citation distribution by sentiment connotations
contains objects with citation counts and relevant data distributed by sentiments (emotional reactions);
possible sentiment connotation types: anger, happiness, love, sadness, share, fun

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:179747

type of element
