package org.openmrs.module.icare.core;

// Generated Oct 7, 2020 12:48:40 PM by Hibernate Tools 5.2.10.Final

import org.openmrs.BaseOpenmrsData;
import org.openmrs.Concept;
import org.openmrs.Drug;
import org.openmrs.Order;
import org.openmrs.module.icare.billing.models.ItemPrice;
import org.openmrs.module.icare.billing.models.Payment;
import org.openmrs.module.icare.store.models.Stock;

import javax.persistence.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Item generated by hbm2java
 */
@Entity
@Table(name = "item")
public class Item extends BaseOpenmrsData {
	
	@Id
	@GeneratedValue
	@Column(name = "item_id", unique = true)
	private Integer id;
	
	//@OneToOne(cascade = CascadeType.ALL)
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "concept_id")
	private Concept concept;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "drug_id")
	private Drug drug;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "item")
	private List<Stock> stock = new ArrayList<Stock>(0);
	
	@Column(name = "unit", length = 16)
	private String unit;
	
	@Column(name = "stockable")
	private Boolean stockable;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "id.item")
	private List<ItemPrice> prices = new ArrayList<ItemPrice>(0);
	
	public String getUnit() {
		return unit;
	}
	
	public void setUnit(String unit) {
		this.unit = unit;
	}
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	/*@Override
	public String getUuid() {
	    return super.getUuid();
	}
	*/
	public Concept getConcept() {
		return concept;
	}
	
	public void setConcept(Concept concept) {
		this.concept = concept;
	}
	
	public Drug getDrug() {
		return drug;
	}
	
	public void setDrug(Drug drug) {
		this.drug = drug;
	}
	
	public String getDisplayString() {
		if (this.getConcept() != null) {
			return this.getConcept().getDisplayString();
		}
		if (this.getDrug() != null) {
			return this.getDrug().getDisplayName();
		}
		return null;
	}
	
	public Map<String, Object> toMap() {
		Map<String, Object> itemMap = new HashMap<String, Object>();
		itemMap.put("unit", this.getUnit());
		itemMap.put("stockable", this.getStockable());
		itemMap.put("uuid", this.getUuid());
		
		if (this.getConcept() != null) {
			HashMap<String, Object> concept = new HashMap<String, Object>();
			concept.put("uuid", this.getConcept().getUuid());
			concept.put("display", this.getConcept().getDisplayString());
			itemMap.put("concept", concept);
		}
		if (this.getDrug() != null) {
			HashMap<String, Object> drug = new HashMap<String, Object>();
			drug.put("uuid", this.getDrug().getUuid());
			drug.put("display", this.getDrug().getDisplayName());
			itemMap.put("drug", drug);
		}
		itemMap.put("display", this.getDisplayString());
		
		List<Map<String, Object>> prices = new ArrayList<Map<String, Object>>();
		for (ItemPrice price : this.getPrices()) {
			prices.add(price.toMap());
		}
		itemMap.put("prices", prices);
		
		Map<String, Object> creatorObject = new HashMap<String, Object>();
		if (this.getCreator() != null) {
			creatorObject.put("uuid", this.getCreator().getUuid());
			creatorObject.put("display", this.getCreator().getDisplayString());
		}
		itemMap.put("creator", creatorObject);
		Date date = this.getDateCreated();
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
		itemMap.put("created", dateFormat.format(date));
		itemMap.put("voided", this.getVoided());
		
		return itemMap;
	}
	
	public Boolean getStockable() {
		return stockable;
	}
	
	public void setStockable(Boolean stockable) {
		this.stockable = stockable;
	}
	
	public List<ItemPrice> getPrices() {
		return prices;
	}
	
	public String toString() {
		return "Item(" + this.getDisplayString() + ")";
	}
}
