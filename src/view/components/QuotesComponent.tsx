import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import useQuotes from '../../hooks/useQuotes';
import DocImage from '../../assets/svg-components/DocImage'
import MarkIcon from '../../assets/svg-components/Mark'
import { moderateScale, scaleHeight, scaleWidth } from '../../constants/metrics';
import Arrow from '../../assets/svg-components/Arrow';
import { Quote } from '../../models/Quote';


const QuotesComponent: React.FC = () => {
  const { quotes, loading, error } = useQuotes();

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error loading quotes</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quotes</Text>
        <TouchableOpacity
          style={styles.headerBtnContainer}
          onPress={() => Alert.alert('Create new quote')}>
          <Text style={styles.createButton}>Create New Quote</Text>
          <Arrow width={10} height={15} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={styles.scrollView}>
        {quotes.map((quote: Quote, index: number) => (
          <View style={{ marginTop: scaleHeight(10) }} key={quote.id}>
            {index === 0 ? <View style={styles.customLabel}>
              <Text style={styles.cusomText}>Latest</Text>
            </View> : null}
            <TouchableOpacity
              style={[styles.card, index === 0 && styles.signedCard]}
              onPress={() => Alert.alert(`Quote: ${quote.amount}`)}
            >
              <DocImage width={scaleWidth(22)} height={scaleHeight(28)} />
              <View style={styles.textContent}>
                <Text style={styles.boldText}>{quote.amount}</Text>
                <Text style={styles.dateText}>{quote.date}</Text>
                <View style={styles.markedBlock}>
                  {quote.signed ? <MarkIcon width={scaleWidth(12)} height={scaleHeight(12)} /> : null}
                  <Text style={[styles.boldText, { color: quote.signed ? '#0B7A6D' : '#9C9C9C', marginLeft: quote.signed ? scaleWidth(5) : 0 }]}>{quote.signed ? 'Signed' : 'Not Signed'}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleHeight(16),
    marginHorizontal: scaleWidth(15)
  },
  headerBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customLabel: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#FFFFFF',
    left: '35%',
    marginTop: scaleHeight(-7),
    alignItems: 'center',
    justifyContent: 'center'
  },
  cusomText: {
    paddingHorizontal: scaleWidth(10),
    fontSize: moderateScale(12),
    fontWeight: '700',
    height: scaleHeight(16),
    color: '#0B7A6D'
  },
  title: {
    fontSize: moderateScale(14),
    fontWeight: '400',
  },
  createButton: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: '#0BAB5C',
    marginRight: scaleWidth(10)
  },
  scrollView: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: moderateScale(8),
    padding: moderateScale(15),
    marginLeft: scaleWidth(10),
    width: scaleWidth(140),
    height: scaleHeight(76),
    justifyContent: 'flex-start',
    borderWidth: moderateScale(1),
    borderColor: '#E5E5E5',
    flexDirection: 'row',
  },
  markedBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boldText: {
    fontSize: moderateScale(12),
    fontWeight: '500',
  },
  textContent: {
    marginLeft: scaleWidth(15)
  },
  signedCard: {
    borderColor: 'green',
    borderWidth: moderateScale(1),
  },
  dateText: {
    marginVertical: scaleHeight(4),
    fontSize: moderateScale(12)
  },
});

export default QuotesComponent;