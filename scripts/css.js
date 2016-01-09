const MAX_WIDTH = 651;
const MIN_WIDTH = MAX_WIDTH - 2;
const BLUE_LINK = '#3b65a7';
const RED = '#c41200';

module.exports = function(id){
  return `#${id} {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 0;
  margin: 10px auto;
  max-width: ${MAX_WIDTH}px;
}

.reviews {
  background-color: #ccc;
  font-size: 16px;
  padding: 1px;
}

.review {
  background-color: white;
  box-sizing: border-box;
  font-size: 14px;
  margin-bottom: 1px;
  min-width: ${MIN_WIDTH}px;
  padding: 10px 6px 20px 10px;
  white-space: nowrap;
}

.number {
  font-weight: bold;
}

.review__user,
.user__avatar,
.user__info,
.review__rating {
  display: inline-block;
  vertical-align: top;
}

.review__user {
  width: 38%;
}
.review__rating {
  background-color: white;
  width: 61%;
}

.user__avatar {
  width: 60px;
  height: 60px;
}

.user__info {
  font-size: 12px;
  line-height: 18px;
  padding: 0 18px 0 4px;
}

.info__name {
  color: ${BLUE_LINK};
  font-weight: bold;
}

.info__friends,
.info__reviews  {
  color: #555;
}

.info__location {
  font-weight: bold;
  white-space: normal;
}

.info_elite {
  color: ${RED};
  font-weight: bold;
}

.rating__stars {
  color: #555;
}

.stars__total {
  display: inline-block;
}

.stars__date {
  color: #555;
  font-size: 14px;
  vertical-align: 30%;
}

.rating__checkin {
  color: #555;
  font-size: 13px;
  margin: 10px 0;
}

.rating__comment {
  white-space: normal;
}

#loadMore {
  display: block;
  margin: 20px auto;
  width: 160px;
  font-size: 16px;
}
`
};
